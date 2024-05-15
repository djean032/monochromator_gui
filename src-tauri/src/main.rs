// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serialport::available_ports;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command(rename_all = "snake_case")]
fn get_serials() -> Vec<String> {
    let mut port_vec: Vec<String> = vec![];
    let ports = available_ports().unwrap();
    for p in ports {
        port_vec.push(p.port_name);
    }
    port_vec.into()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_serials])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
