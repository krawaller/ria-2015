var React = require("react");
var TopSearch = require("./topsearch.js");
var ProjectForm = require("./projectform");

var ProjectAdd = React.createClass({
	render: function(){
		return (
			<div>
				<div className="page-title">
					<div className="title_left">
						<h3>Create new Project</h3>
					</div>

					<TopSearch />
				</div>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-md-6 col-xs-12">
						<div className="x_panel">
							<div className="x_title">
								<h2>New Project</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<br />
								
								<ProjectForm project="create new" />
								
							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
});

module.exports = ProjectAdd;
