export default {

	name: 'prism',

	initialize(instance) {

		if (Prism) {
			Prism.languages.surql = {
				'comment': {
					pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
					lookbehind: true
				},
				'string': {
					pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
					greedy: true,
					lookbehind: true
				},
				'variable': /[$][\w.]+/,
				'function': /\b(?:fn|function|count|(?:(array|crypto|duration|fn|geo|http|is|math|meta|parse|rand|session|sleep|string|time|type)::[\w]+)(::[\w]+)?)(?=\s*\()/i,
				'range': /\b[\w\d]+[:]([\w\d]+\b|⟨[^⟩]+⟩|`[^`]+`)\.\.([\w\d]+\b|⟨[^⟩]+⟩|`[^`]+`)/i,
				'record': /\b[\w\d]+[:](([\w\d]+\b|⟨[^⟩]+⟩|`[^`]+`)|(?=\{|\[))?/i,
				'cast': /[<](bool|int|float|string|number|decimal|datetime|duration|future)[>]/,
				'constant': /\b(?:math)::[\w]+/i,
				'keyword': /\b(?:AFTER|ASC|AS|ASSERT|BEFORE|BEGIN( TRANSACTION)?|CANCEL( TRANSACTION)?|COLUMNS|COMMIT( TRANSACTION)?|CONTENT|CREATE|DATABASE|DB|DEFINE|DELETE|DESC|DESCRIBE|DIFF|DROP|ELSE|END|ES256|ES384|ES512|EVENT|FETCH|FIELD|FOR|FROM|FUNCTION|GROUP( BY)?|HS256|HS384|HS512|IF|INDEX|INFO|INSERT(( IGNORE)? INTO)?|INTO|KILL|LET|LIMIT( BY)?|LIVE|LOGIN|MERGE|NAMESPACE|NS|ON DUPLICATE KEY UPDATE|ON|ORDER( BY)?|PASSHASH|PASSWORD|PERMISSIONS|PS256|PS384|PS512|RELATE|REMOVE|REPLACE|RETURN|RS256|RS384|RS512|SCHEMAFULL|SCHEMALESS|SCOPE|SELECT|SESSION|SET|SIGNIN|SIGNUP|SPLIT( ON)?|START( AT)?|TABLE|THEN|TIMEOUT|TOKEN|TYPE|UNIQUE|UPDATE|USE|VALUE|VALUES|VERSION|WHEN|WHERE|PARAM)\b/,
				'operator': /==|!=|\*=|\?=|=|!~|\*~|\?~|~|<=|<|>=|>|\+|-|\*|×|∙|\/|÷|∋|∌|∈|∉|⊇|⊃|⊅|⊆|⊂|⊄|&&|\|\||\b(?:AND|OR|IS NOT|IS|CONTAINSALL|CONTAINSANY|CONTAINSNONE|CONTAINSSOME|CONTAINSNOT|CONTAINS|ALLINSIDE|ANYINSIDE|NONEINSIDE|SOMEINSIDE|NOTINSIDE|INSIDE|OUTSIDE|INTERSECTS)\b/i,
				'connector': /[.]|<->|<-|->/,
				'nothing': /\b(?:EMPTY|NONE|NULL)\b/i,
				'boolean': /\b(?:TRUE|FALSE)\b/i,
				'duration': /[1234567890]+(ns|µs|ms|s|m|h|d|w|y)/i,
				'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
				'punctuation': /[;[\](){}`,]/,
			};

			Prism.languages.shell = {
				'comment': /(#.*$)|(\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z\])/m,
				'command': {
					pattern: /(%|\>).*$/m,
					lookbehind: true,
				},
				'prompt': /(^.*%|PS C:\\>)/m,
			};

		}

	},

}
