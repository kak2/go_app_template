module.exports = function(grunt) {
	grunt.initConfig({
		cfg: grunt.file.readJSON('./etc/cfg.json'),
		clean: ['./bin/<%= cfg.appname %>Server'],

		go: {
	      options: {
		       GOPATH: ["./", "/home/vagrant/code"]
	      },
	      myapp: {
	        root: './', 
	        output: './bin/<%= cfg.appname %>Server' ,
	        run_files: ['app.go']
	      }
	    },

	    shell: {
			run: {
				command: 'sudo ./bin/<%= cfg.appname %>Server',  
				options: {
					execOptions: {
						cwd: './'
					}
				}
			},
	    },
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-go');
	grunt.loadNpmTasks('grunt-shell');

	// Task declare
	grunt.registerTask('build', ['go:build:myapp']); 
	grunt.registerTask('run', ['shell:run']); 
	grunt.registerTask('test', ['shell:run']); 

	grunt.registerTask('default', ['clean','build','run']);
};