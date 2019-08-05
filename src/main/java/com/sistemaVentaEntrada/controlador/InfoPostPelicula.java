package com.sistemaVentaEntrada.controlador;

import java.time.LocalDate;
import java.time.LocalTime;

public class InfoPostPelicula {
	
	String movieName;
	Integer roomNumber;
	String date;
	String time;
	
	public InfoPostPelicula() {}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public Integer getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(Integer roomNumber) {
		this.roomNumber = roomNumber;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "InfoPostPelicula [movieName=" + movieName + ", roomNumber=" + roomNumber + ", date=" + date + ", time="
				+ time + "]";
	}
	
}
