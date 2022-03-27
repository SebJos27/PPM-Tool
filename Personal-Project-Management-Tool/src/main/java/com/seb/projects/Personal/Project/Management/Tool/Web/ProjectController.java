package com.seb.projects.Personal.Project.Management.Tool.Web;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seb.projects.Personal.Project.Management.Tool.Domain.Project;
import com.seb.projects.Personal.Project.Management.Tool.Service.ProjectService;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;


    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
        
    	if(result.hasErrors()) {
    		Map<String,String> errorMap = new HashMap<>();
    		for (FieldError err: result.getFieldErrors()) {
    			errorMap.put(err.getField(), err.getDefaultMessage());
    		}
    		return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
    	}
    	
    	Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }
}