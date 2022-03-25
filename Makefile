build:
	mkdir ./out -p && zip -r -FS ./out/ext.zip * -x *.md -x .* -x out -x Makefile
