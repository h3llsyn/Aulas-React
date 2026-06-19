package com.mongodb.fluxo.repository;

import com.mongodb.fluxo.model.Curso;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "cursos", path = "cursos")
public interface CursoRepository  extends MongoRepository<Curso, String> {

}
