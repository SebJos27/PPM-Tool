package com.seb.projects.Personal.Project.Management.Tool.Web;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seb.projects.Personal.Project.Management.Tool.Domain.Project;
import com.seb.projects.Personal.Project.Management.Tool.Service.MapValidationErrorService;
import com.seb.projects.Personal.Project.Management.Tool.Service.ProjectService;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
    	ResponseEntity<?> mapValidationService = mapValidationErrorService.MapValidationService(result);
    	if (mapValidationService != null) {
    		return mapValidationService;
    	}
    	Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }
    
    @GetMapping("/{projectId}")
    public ResponseEntity<?> readProjectByProjectId(@PathVariable String projectId)
    {
    	Project project = projectService.readProject(projectId);
    	return new ResponseEntity<Project>(project,HttpStatus.OK);
    }
    
    @GetMapping("/all")
    public Iterable<Project> readAllProject(){
    	return projectService.findAll();
    }
    
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteByProjectIdentifier(@PathVariable String projectId){
    	projectService.deleteProjectByIdentifier(projectId);
    	return new ResponseEntity<String>("Project with id "+projectId + " was deleted",HttpStatus.OK);
    }
    
    @PostMapping("/update")
    public ResponseEntity<?> updateProjectByProjectIdentifier(@Valid @RequestBody Project project, BindingResult result){
    	ResponseEntity<?> mapValidationService = mapValidationErrorService.MapValidationService(result);
    	if (mapValidationService != null) {
    		return mapValidationService;
    	}
    	Project project1 = projectService.updateProjectByIdentifier(project);
        return new ResponseEntity<Project>(project1, HttpStatus.OK);
    }
}