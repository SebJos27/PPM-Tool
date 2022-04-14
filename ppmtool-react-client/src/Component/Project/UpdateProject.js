import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProject, updateProject } from "../../actions/projectAction"
import PropTypes from "prop-types"
import { withParam } from '../../withParam';
import { withNavigate } from '../../withNavigate';
import classnames from 'classnames';


class UpdateProject extends Component {

    constructor() {
        super()

        this.state = {
            projectName: "",
            projectIdentifier: "",
            description: "",
            start_date: "",
            end_date: "",
            error: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const { id } = this.props
        this.props.getProject(id, this.props.navigate)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.project.projectIdentifier !== undefined && prevState.projectIdentifier === "") {
            const {
                projectName,
                projectIdentifier,
                description,
                start_date,
                end_date,
            } = nextProps.project

            return {
                projectName: projectName,
                projectIdentifier: projectIdentifier,
                description: description,
                start_date: start_date,
                end_date: end_date,
                error: {}
            }
        }

        if (nextProps.error !== prevState.error) {
            return { error: nextProps.error };
        }
        else {
            return null;
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        };

        this.props.updateProject(newProject, this.props.navigate)
    }

    render() {
        console.log("r")
        const { error } = this.state;
        console.log(error, this.state)
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": error.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                    />
                                    {error.projectName && (
                                        <div className="invalid-feedback">
                                            {error.projectName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChange}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": error.description
                                        })}
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                    {error.description && (
                                        <div className="invalid-feedback">
                                            {error.description}
                                        </div>
                                    )}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="start_date"
                                        value={this.state.start_date}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="end_date"
                                        value={this.state.end_date}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.project.project,
    error: state.error
})

export default withNavigate(withParam(connect(mapStateToProps, { getProject, updateProject })(UpdateProject)));