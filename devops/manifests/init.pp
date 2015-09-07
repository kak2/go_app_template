stage { "prepare":
  before => Stage["main"],
}
stage { "last":}
Stage['main'] -> Stage['last']

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
include nodejs
include golang
class {
  "setup":
    stage => prepare;
  "grunt":
    stage => last;
}
