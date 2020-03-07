module.exports = {
	"printWidth": 100,
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 4,
	"semi": false,
	"bracketSpacing": true,
	"trailingComma": "all",
	"arrowParens": "always",
	"endOfLine": "auto",
	"overrides": [
		{
			"files": ["*.yaml", "*.yml"],
			"options": {
				"tabWidth": 2,
				"useTabs": false,
				"singleQuote": false
			}
		}
	]
})
