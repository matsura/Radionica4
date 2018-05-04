using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using BIMManager.Data.Abstract;
using BIMManager.Models.Entities;
using BIMManager.Models.ViewModels;
using BIMManager.API.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace BIMManager.API.Controllers
{
    [Produces("application/json")]
    [Route("api/project")]
    [Authorize]
    public class ProjectController : Controller
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAll([FromQuery] int? limit, [FromQuery] int? skip, [FromQuery] string search)
        {
            int totalCount = _projectRepository.Count();

            if (limit == null && skip == null) {
                return Ok(new ApiResponse<List<Project>> {
                    Meta = new ApiResponseMetadata { Total = totalCount },
                    Result = _projectRepository.GetAll().ToList()
                });
            } else if (limit != null && skip == null) {

                return Ok(new ApiResponse<List<Project>>
                {
                    Meta = new ApiResponseMetadata { Total = totalCount },
                    Result = _projectRepository.GetAll().Take((int)limit).ToList()
                });
            } else {

                return Ok(new ApiResponse<List<Project>>
                {
                    Meta = new ApiResponseMetadata { Total = totalCount },
                    Result = _projectRepository.GetAll().Take((int)limit).Skip((int)skip).ToList()
                });
            }
        }

        [HttpPost]
        [Route("")]
        public IActionResult CreateProject([FromBody] ProjectCreateViewModel projectCreateViewModel)
        {
            try {
                Project project = new Project(projectCreateViewModel);
                _projectRepository.Add(project);
                _projectRepository.Commit();

                return Ok(new {
                    Status = true,
                    Result = project
                });
            } catch (Exception e) {

                return BadRequest(new {
                    Status = false,
                    Message = e.Message
                });
            }
        }
    }
}