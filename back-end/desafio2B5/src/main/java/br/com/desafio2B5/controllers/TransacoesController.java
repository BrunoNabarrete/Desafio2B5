package br.com.desafio2B5.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import br.com.desafio2B5.entities.TransacoesEntity;
import br.com.desafio2B5.service.TransacoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("transacoes")
@CrossOrigin(origins = "http://localhost:4200")
public class TransacoesController {

    private static final Logger logger = LoggerFactory.getLogger(TransacoesController.class);
    @Autowired
    private TransacoesService transacoesService;

    @GetMapping
    public List<TransacoesEntity> buscarTodasAsTransacoes() {
        return transacoesService.buscarTodasAsTransacoes();
    }

    @PostMapping
    public ResponseEntity<Object> inserirTransacao(@RequestBody TransacoesEntity transacoesEntity) {
        Integer idTransacao = transacoesService.inserirOuAtualizarTransacao(transacoesEntity);
        return ResponseEntity.status(200).body(idTransacao);
    }

    @PutMapping
    public ResponseEntity atualizarTransacao(@RequestBody TransacoesEntity transacoesEntity){
        if (transacoesEntity.getId() == null) {
            return ResponseEntity.status(500).body("Id não informado");
        }
        transacoesService.inserirOuAtualizarTransacao(transacoesEntity);
        return ResponseEntity.status(200).build();
    }

    @DeleteMapping
    public ResponseEntity deletarTransacao(@RequestParam Integer id){
        transacoesService.deletarTransacao(id);
        return ResponseEntity.status(200).build();
    }

}

