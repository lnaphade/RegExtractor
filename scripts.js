function regexExtract() {
	
			var text = $('#regex-extract-matches-text').val();
			var regex = $('#regex-extract-matches-regex').val();

			var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
			if (regexParts) {
				var r = new RegExp(regexParts[1], regexParts[2]);
			} else {
				var r = new RegExp(regex);
			}
			var matches = text.match(r);
			var ret = '';
			if (matches) {
				for (var i = 0; i < matches.length; i++) {
					ret += matches[i];
					ret += "\n";
				}
			}
			$('#regex-extract-matches-text').val(ret);
		}