package br.com.desafio2B5.service;

import br.com.desafio2B5.entities.TransacoesEntity;
import br.com.desafio2B5.repositories.TransacoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransacoesService {

    @Autowired
    private TransacoesRepository transacoesRepository;

    public Integer inserirOuAtualizarTransacao(TransacoesEntity transacoesEntity) {
         TransacoesEntity transacaoSalva = transacoesRepository.save(transacoesEntity);
         return transacaoSalva.getId();
    }
    public List<TransacoesEntity> buscarTodasAsTransacoes() {
        return transacoesRepository.findAll();
    }

    public void deletarTransacao(Integer id) {
        transacoesRepository.deleteById(id);
    }
}