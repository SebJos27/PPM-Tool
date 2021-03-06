package com.seb.projects.Personal.Project.Management.Tool.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

@Service
public class MapValidationErrorService {
	
	public ResponseEntity<?> MapValidationService(BindingResult result){
		
		if(result.hasErrors()) {
    		Map<String,String> errorMap = new HashMap<>();
    		for (FieldError err: result.getFieldErrors()) {
    			errorMap.put(err.getField(), err.getDefaultMessage());
    		}
    		return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
    	}
		return null;
	}

}
