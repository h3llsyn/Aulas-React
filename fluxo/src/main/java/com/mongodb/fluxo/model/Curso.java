package com.mongodb.fluxo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "curso")
public class Curso {
    @Id
    private String id;
    private String cursos;
    private String periodo;
}
