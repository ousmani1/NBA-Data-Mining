function CreateTeamAverages() {
    var request = $.ajax({
        url: "http://localhost/scripts/controllers/CallTeamAverages.php",
        type: "POST",
        dataType: "html"
    });

    request.fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
    });
}

function CreateTeamMetrics() {
    var request = $.ajax({
        url: "http://localhost/scripts/controllers/CallTeamMetrics.php",
        type: "POST",
        dataType: "html"
    });

    request.fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
    });
}

function CreateTeamTotals() {
    var request = $.ajax({
        url: "http://localhost/scripts/controllers/CallTeamTotals.php",
        type: "POST",
        dataType: "html"
    });

    request.fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
    });
}

function CreateOpponentAverages() {
  var request = $.ajax({
      url: "http://localhost/scripts/controllers/CallOpponentAverages.php",
      type: "POST",
      dataType: "html"
  });

  request.fail(function(jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
  });
}

function CreateOpponentMetrics() {
  var request = $.ajax({
      url: "http://localhost/scripts/controllers/CallOpponentMetrics.php",
      type: "POST",
      dataType: "html"
  });

  request.fail(function(jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
  });
}

function CreateOpponentTotals() {
  var request = $.ajax({
      url: "http://localhost/scripts/controllers/CallOpponentTotals.php",
      type: "POST",
      dataType: "html"
  });

  request.fail(function(jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
  });
}

function CreatePlayerAverages() {
  var request = $.ajax({
      url: "http://localhost/scripts/controllers/CallPlayerAverages.php",
      type: "POST",
      dataType: "html"
  });

  request.fail(function(jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
  });
}

function CreatePlayerMetrics() {
  var request = $.ajax({
      url: "http://localhost/scripts/controllers/CallPlayerMetrics.php",
      type: "POST",
      dataType: "html"
  });

  request.fail(function(jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
  });
}

function CreatePlayerTotals() {
  var request = $.ajax({
      url: "http://localhost/scripts/controllers/CallPlayerTotals.php",
      type: "POST",
      dataType: "html"
  });

  request.fail(function(jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
  });
}
