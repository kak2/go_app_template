stage { "prepare":
  before => Stage["main"],
}

class setup {
  exec { "update-aptitude":
    command => "/usr/bin/apt-get update -y",
  }
}

class grunt {
	exec { "install grunt":
    	command => "/usr/local/bin/npm install grunt-cli -g",
  	}
}

class {
  "setup":
    stage => prepare;
  "nodejs":
  	version => 'stable';
  "grunt":
    require => Class["nodejs"];
  "golang":;
}
