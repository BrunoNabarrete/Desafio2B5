package br.com.desafio2B5.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("status")
public class StatusController {

    @GetMapping()
    public String status() {
        return "Oi mundo";
    }

    @PostMapping()
    public String statusPost() {
        return "teste";
    }
}
