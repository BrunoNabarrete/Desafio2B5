package br.com.desafio2B5.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "transacoes")
public class TransacoesEntity {

    @Id
    @Column(name = "idtransacoes")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "data_transacoes")
    private String data;

    @Column(name = "valor")
    private Double valor;

    @Column(name = "categoria")
    private String categoria;
}
// Compare this snippet from src/main/java/br/com/Desafio2B5/service/TransacoesService.java:
// package br.com.Desafio2B5.service;
//
