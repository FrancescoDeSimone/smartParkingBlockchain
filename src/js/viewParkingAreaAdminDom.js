function printParkingArea(parkingArea){
    console.log("admin")
    $("#contenutoTabella").empty();
    $("#noSpot").empty();
    let parkingAreaHtml;
    if(parkingArea.lenght == 0){
        parkingAreaHtml = '<div class="block-header"><h2>Non sono disponibili parcheggi, aggiungine uno!</h2></div>'
        $("#noSpot").html(parkingAreaHtml);
    }
    else{
        for(let i=0; i<parkingArea.length;i++){
            $("#contenutoTabella").append('<tr id='+i+'></tr>');
            parkingArea[i].then(pa => {
                $("#"+i).append(
                    '<th scope="row">'+pa[0].toNumber()+'</th>'+
                    '<td>'+pa[1].toNumber()+'</td>'+
                    '<td>'+pa[2].toNumber()+'</td>');
                if(pa[3] == -1)
                    $("#"+i).append('<td>Nessun parcheggio Occupato</td>')
                else{
                    $("#"+i).append('<td>'+pa[3].toNumber()+'</td>')
                }
            }).then(()=>$("#"+i).append('<td><button onclick="updateParkingArea('+i+')" type="button" class="btn bg-red waves-effect"><i class="material-icons">create</i></button></td>'))
        }
    }
}

function sendUpdate(id){
    App.updateParkingArea(id);
    $("#updateParkingArea").empty();
}

function updateParkingArea(id){
    $("#updateParkingArea").empty();
    $("#updateParkingArea").append(`<div class="row clearfix">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="card">
                                                <div class="header">
                                                    <h2>Modifica il parcheggio `+id+`</h2>
                                            </div>
                                            <div class="body">
                                                <form>
                                                    <div class="row clearfix">
                                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                            <div class="form-group">
                                                                <div class="form-line">
                                                                    <input type="number" min="0" class="form-control" id="priceOfParkingArea" placeholder="Prezzo Orario Parcheggio" required>
                                                                    <div class="help-info">Inserire il prezzo orario del parcheggio</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                            <div class="form-group">
                                                                <div class="form-line">
                                                                    <input type="text" class="form-control" id="addressOfParkingArea" placeholder="Indirizzo Parcheggio" required>
                                                                    <div class="help-info">Inserire l\'indirizzo del parcheggio </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                                            <div class="form-group">
                                                                <div class="form-line">
                                                                    <input type="number" min="0" class="form-control" id="numberOfSpot" name="number" placeholder="Numero di posti auto" required>
                                                                    <div class="help-info">Inserire il numero di posti disponibili</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="form-group">
                                                                    <button type="button" onclick="sendUpdate(`+id+`)" class="btn btn-primary btn-lg m-l-15 waves-effect">Modifica</button>
                                                            </div>
                                                        </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`);
}