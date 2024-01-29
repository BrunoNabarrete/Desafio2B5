package br.com.desafio2B5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.desafio2B5.entities.TransacoesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface TransacoesRepository extends JpaRepository<TransacoesEntity, Integer> {
}
