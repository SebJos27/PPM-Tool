package com.seb.projects.Personal.Project.Management.Tool.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seb.projects.Personal.Project.Management.Tool.Domain.Project;
import com.seb.projects.Personal.Project.Management.Tool.Exception.ProjectIdException;
import com.seb.projects.Personal.Project.Management.Tool.Repositories.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	public Project  saveOrUpdateProject(Project project)
	{
		try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }catch (Exception e){
        	System.out.println("Exception : "+ e);
            throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists");
        }
	}
	
	public Project readProject(String projectId)
	{
		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if(project == null)
		{
			throw new ProjectIdException("Project Id " + projectId + " doesn't exist");
		}
		return project;
	}
	
	public Iterable<Project> findAll(){
		return projectRepository.findAll();
	}
	
	public void deleteProjectByIdentifier(String projectId)
	{
		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if( project == null)
		{
			throw new ProjectIdException("Project Id "+projectId+" not available, so cannot be deleted");
		}
		projectRepository.delete(project);
	}
	
	public Project updateProjectByIdentifier(Project project) {
		Project project1 = projectRepository.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase());
		if(project1 == null) {
			throw new ProjectIdException("Project Id " + project.getProjectIdentifier() + " doesn't exist");
		}
		project.setId(project1.getId());
		return saveOrUpdateProject(project);
	}
}
