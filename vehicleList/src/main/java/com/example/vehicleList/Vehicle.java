package com.example.vehicleList;

public class Vehicle {
    private String name;

    // Default constructor (no-args)
    public Vehicle() {
    }

    // Parameterized constructor
    public Vehicle(String name) {
        this.name = name;
    }

    // Getter for 'name'
    public String getName() {
        return name;
    }

    // Setter for 'name'
    public void setName(String name) {
        this.name = name;
    }
}

