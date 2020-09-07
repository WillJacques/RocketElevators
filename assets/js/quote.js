$("#selectMe, input[type=radio][name=exampleRadios], #mcalc-nhours, #mcalc-noccupant, #mcalc-ntenant, #mcalc-nelevator, #mcalc-naparts, #mcalc-nparking, #mcalc-nfloors, #mcalc-nbasements, #mcalc-nbusiness").change(function () {
    mcalc();
});

function mcalc() {
    var selectedtype = $("#selectMe").val();		                            // Building type
    var mcalc_naparts = $("#mcalc-naparts").val(); 		                        // Number of apartments
    var mcalc_nfloors = $("#mcalc-nfloors").val();	    	                    // Number of floors
    var mcalc_nbasements = $("#mcalc-nbasements").val();    	                // Number of basements
    var mcalc_nbusiness = $("#mcalc-nbusiness").val();    	                    // Number of businesses
    var mcalc_nparking = $("#mcalc-nparking").val(); 	    	                // Number of parking
    var mcalc_nelevator = $("#mcalc-nelevator").val();     	                    // Number of elevator needed
    var mcalc_ntenant = $("#mcalc-ntenant").val(); 		                        // Number of tenants companies
    var mcalc_noccupant = $("#mcalc-noccupant").val(); 	                        // Number of occupants per floor
    var mcalc_nhours = $("#mcalc-nhours").val();    	                        // Number of hour of activity in building
    var serviceline = $('input[name="exampleRadios"]:checked').val();	        // Service Line
    var installfee = 0.1;
    var totalcost = 0;
    var mcalc_elevetorunit = 5765;
    var result_shafts = 0;

    if (serviceline === "standard") {
        mcalc_elevetorunit = 5765;
        installfee = 0.1;
        $("#mcalc-elevetorunit").text(mcalc_elevetorunit.formatMoney(2, '.', ','));
    }

    if (serviceline === "premium") {
        mcalc_elevetorunit = 12345;
        installfee = 0.13;
        $("#mcalc-elevetorunit").text(mcalc_elevetorunit.formatMoney(2, '.', ','));
    }

    if (serviceline === "excelium") {
        mcalc_elevetorunit = 15400;
        installfee = 0.16;
        $("#mcalc-elevetorunit").text(mcalc_elevetorunit.formatMoney(2, '.', ','));
    }

    if (selectedtype === "residential") {
        result_shafts = Math.ceil(mcalc_naparts / mcalc_nfloors / 6);
        $("#mcalc-result-shafts").text(result_shafts);
    }

    if (selectedtype === "commercial") {
        result_shafts = mcalc_nelevator
        $("#mcalc-result-shafts").val(result_shafts);
    }

    if (selectedtype === "corporate") {
    }

    if (selectedtype === "hybrid") {
    }

    var totalcost1 = mcalc_elevetorunit * result_shafts * installfee ;
        $("#mcalc-installcost").text(totalcost1.formatMoney(2, '.', ','));
    var totalcost2 = mcalc_elevetorunit * result_shafts + totalcost1;
        $("#mcalc-totalcost").text(totalcost2.formatMoney(2, '.', ','));
}

