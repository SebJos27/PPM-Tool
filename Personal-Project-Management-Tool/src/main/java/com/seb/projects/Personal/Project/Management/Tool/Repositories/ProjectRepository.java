package com.seb.projects.Personal.Project.Management.Tool.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.seb.projects.Personal.Project.Management.Tool.Domain.Project;

public interface ProjectRepository extends CrudRepository<Project, Long> {


}
