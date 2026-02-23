{
  description = "Ghostscript enabled flake";

  inputs = {
	nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-25.05-darwin";
	#nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
	let 
		legacy = nixpkgs.legacyPackages.x86_64-linux;	
	in {

	packages.x86_64-linux = {
		hello = legacy.hello;
		ghostscript = legacy.ghostscript;
		starship = legacy.starship;
		default = legacy.nushell;
		
	};   

	environment.systemPackages = with legacy; [
		ghostscript
		nushell
		starship
	];

	devShells.x86_64-linux = {
		default = legacy.mkShell {
			buildInputs = [
				legacy.dotnetCorePackages.sdk_10_0-bin
				legacy.sqlite
				legacy.sqlite-interactive
				legacy.ghostscript
				legacy.starship
				legacy.evince
				legacy.nushell
				legacy.nodejs_24
				legacy.nodePackages."@angular/cli"
			];
			shellHook = ''
				echo "Running hooks"
				exec nu
			'';
		};

	};
    
  };   
	
}
