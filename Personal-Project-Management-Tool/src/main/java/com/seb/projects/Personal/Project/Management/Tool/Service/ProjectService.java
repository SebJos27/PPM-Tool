package com.seb.projects.Personal.Project.Management.Tool.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seb.projects.Personal.Project.Management.Tool.Domain.Project;
import com.seb.projects.Personal.Project.Management.Tool.Repositories.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	public Project  saveOrUpdateProject(Project project)
	{
		return projectRepository.save(project);
	}

}
