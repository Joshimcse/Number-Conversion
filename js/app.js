$(document).ready(function () {
	var bnr, dec, oct, hex, temp;

	$("#decimal1").focus(function () {
		alert("Hello Decimal");
	});

	// Binary to Other Numbering System
	$("#binary").focus(function () {
		$(this).keyup(function () {
			temp = $(this).val();
			dec = parseInt(temp, 2);

			if (temp == "" || isNaN(dec)) {
				$("#binary").val("");
				$("#b2d").val("");
				$("#b2o").val("");
				$("#b2h").val("");
			} else {
				bnr = dec.toString(2);
				oct = dec.toString(8);
				hex = dec.toString(16);

				$("#binary").val(bnr);
				$("#b2d").val(dec);
				$("#b2o").val(oct);
				$("#b2h").val(hex.toUpperCase());
			}
		});
	});

	// Decimal to Other Numbering System
	$("#decimal").focus(function () {
		$(this).keyup(function () {
			temp = $(this).val();
			dec = parseInt(temp, 10);

			if (temp == "" || isNaN(dec)) {
				$("#d2b").val("");
				$("#decimal").val("");
				$("#d2o").val("");
				$("#d2h").val("");
			} else {
				bnr = dec.toString(2)
				oct = dec.toString(8)
				hex = dec.toString(16);

				$("#d2b").val(bnr);
				$("#decimal").val(dec);
				$("#d2o").val(oct);
				$("#d2h").val(hex.toUpperCase());
			}
		});
	});

	// Octal to Other Numbering System
	$("#octal").focus(function () {
		$(this).keyup(function () {
			temp = $(this).val();
			dec = parseInt(temp, 8);

			if (temp == "" || isNaN(dec)) {
				$("#o2b").val("");
				$("#o2d").val("");
				$("#octal").val("");
				$("#o2h").val("");
			} else {
				bnr = dec.toString(2)
				oct = dec.toString(8);
				hex = dec.toString(16);

				$("#o2b").val(bnr);
				$("#o2d").val(dec);
				$("#octal").val(oct);
				$("#o2h").val(hex.toUpperCase());
			}
		});
	});

	// HexaDecimal to Other Numbering System
	$("#hexa").focus(function () {
		$(this).keyup(function () {
			temp = $(this).val();
			dec = parseInt(temp, 16);

			if (temp == "" || isNaN(dec)) {
				$("#h2b").val("");
				$("#h2d").val("");
				$("#h2o").val("");
				$("#hexa").val("");
			} else {
				bnr = dec.toString(2)
				oct = dec.toString(8);
				hex = dec.toString(16);

				$("#h2b").val(bnr);
				$("#h2d").val(dec);
				$("#h2o").val(oct);
				$("#hexa").val(hex.toUpperCase());
			}
		});
	});
});