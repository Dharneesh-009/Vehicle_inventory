package com.example.vehicleList.controller;
import com.example.vehicleList.Vehicle;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    private List<Vehicle> vehicles = new ArrayList<>();

    @GetMapping
    public List<Vehicle> getVehicles() {
        return vehicles;
    }

    @PostMapping
    public List<Vehicle> addVehicle(@RequestBody Vehicle vehicle) {
        vehicles.add(vehicle);
        return vehicles;
    }
}

