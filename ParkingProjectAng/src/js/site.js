// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
   
    $("#parking").css("display", "none");
    $("#bookings").css("display", "none");
    $("#parkingadmin").css("display", "none");
    $("#clientsAssistant").css("display", "none");
    $("#headerdivAdmin").css("display", "none");
    $("#headerdivClient").css("display", "none");
    $("#headerdivAssistant").css("display", "none");
    $("#vehiclesAssistant").css("display", "none");
    $("#bookingsAssistant").css("display", "none");
    $("#rol").css("display", "none");
 
});

var user;

var reservation = {
    parkingId: '',
    userId: '',
    spotId: '',
    vehicleId: '',
    checkoutTime: '',
    checkinTime: '',
    date: '',
    totalRate: '',
    spotRate: '',
};


function Add() {

    user = {
        name: $('#name').val(),
        password: $('#password').val(),        

    };

    if (user != null) {

        $.ajax({
            url: "/Login/GetByName",           
            type: "GET",
            data: { name: user.name, password: user.password },
            success: function (result) { 
                switch (result) {
                    case "1":
                        $("#parkingadmin").css("display", "block");
                        $("#headerdivAdmin").css("display", "block");    
                        $("#clientsAssistant").css("display", "block");
                        $("#vehiclesAssistant").css("display", "block");
                        $("#bookingsAssistant").css("display", "block");
                        $("#rol").css("display", "block");
                        $("#login").css("display", "none");
                        GetRoles();
                        GetParkingsAdmin();
                        GetClients();
                        GetVehiclesCrud();
                        GetBookingsApprove();
                        break;
                    case "2":                      
                        $("#headerdivAssistant").css("display", "block");                       
                        $("#clientsAssistant").css("display", "block");
                        $("#vehiclesAssistant").css("display", "block");
                        $("#bookingsAssistant").css("display", "block");
                        $("#login").css("display", "none");
                        GetClients();
                        GetVehiclesCrud();
                        GetBookingsApprove();
                        break;
                    case "3":                     
                        $("#parking").css("display", "block");
                        $("#bookings").css("display", "block");
                        $("#headerdivClient").css("display", "block");
                        $("#login").css("display", "none");
                        GetParkings();
                        GetBookings();
                        GetUserId();                       
                        break;
                    case "0":
                        $('#result').text("Wrong data. Please, try again");
                        $('#result').css('color', 'red');
                        $('#password').val('');
                        break;
                }
               
            },
            error: function (errorMessage) {
                alert('no');
            }
        });

    }


}

function AddClient() {

    var client = {
        name: $('#nameAddClient').val(),
        email: $('#emailAddClient').val(),
        password: $('#passwordAddClient').val(),
        rolId: 3

    };

        $.ajax({
            url: "/Login/Post",
            data: JSON.stringify(client),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                $('#resultAddClient').text("Client successfully added");
                $('#resultAddClient').css('color', 'green');               
                $('#nameAddClient').val('');
                $('#emailAddClient').val('');
                $('#passwordAddClient').val('');
                GetClients();

            },
            error: function (errorMessage) {
                $('#resultAddClient').text("Wrong data. Please, try again");
                $('#resultAddClient').css('color', 'red');
                $('#password').val('');
            }
        });
}

function AddParking() {
    var addParking = {
        name: $('#nameAddParking').val(),
        city: $('#cityAddParking').val(),
        capacity: $('#capacityAddParking').val(),
        availableSpace: 50,
        occupiedSpace: 0
    }

    $.ajax({
        url: "/Parking/Post",
        data: JSON.stringify(addParking),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#result').text("Client successfully added");
            $('#result').css('color', 'green');
            $('#nameAddParking').val('');
            $('#colorlAddVehicle').val('');
            $('#cityAddParking').val('');
            $('#capacityAddParking').val('');
            GetParkingsAdmin();

        },
        error: function (errorMessage) {
            $('#result').text("Wrong data. Please, try again");
            $('#result').css('color', 'red');
        }
    });

}

function AddVehicle() {

    var vechicle = {
        name: $('#nameAddVehicle').val(),
        color: $('#colorlAddVehicle').val(),
        type: $('#typedAddVehicle').val(), 
        clientId: $('#clientIdAddVehicle').val(), 

    };

    $.ajax({
        url: "/Vehicle/Post",
        data: JSON.stringify(vechicle),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#result').text("Client successfully added");
            $('#result').css('color', 'green');
            $('#nameAddVehicle').val('');
            $('#colorlAddVehicle').val('');
            $('#typedAddVehicle').val('');
            $('#clientIdAddVehicle').val('');
            GetVehiclesCrud();

        },
        error: function (errorMessage) {
            $('#result').text("Wrong data. Please, try again");
            $('#result').css('color', 'red');           
        }
    });
}

function UpdateParking() {
    var parkingUpdate = {
        id: $('#idUpdate').val(),
        name: $('#nameUpdate').val(),
        city: $('#cityUpdate').val(),
        availableSpace: $("#availableSpaceUpdate").val()
    }

    $.ajax({
        url: "/Parking/Put",
        data: JSON.stringify(parkingUpdate),
        type: "PUT",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#result').text("Parking successfully updated");
            $('#result').css('color', 'green');
            GetParkingsAdmin();

        },
        error: function (errorMessage) {
            $('#result').text("Wrong data. Please, try again");
            $('#result').css('color', 'red');
        }
    });

    
}

function UpdateBookings() {
    var reservationUpdate = {       
        id: $('#idUpdateBooking').val(),
        vehicleId: $('#vehiclesUpdateBooking').val(),
        date: $('#dateUpdateBooking').val(),
        checkinTime: $('#checkintimeUpdateBooking').val(),
        checkoutTime: $('#checkouttimeUpdateBooking').val(),
        totalRate: 0
    }

    var hour1 = (reservationUpdate.checkinTime).split(":"),
        hour2 = (reservationUpdate.checkoutTime).split(":")

    reservationUpdate.totalRate = (parseInt(hour2[0]) - parseInt(hour1[0])) * parseInt(forUpdateBooking);

    $.ajax({
        url: "/Reservation/Put",
        data: JSON.stringify(reservationUpdate),
        type: "PUT",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#result').text("Booking successfully updated");
            $('#result').css('color', 'green');
            GetBookings();

        },
        error: function (errorMessage) {
            $('#result').text("Wrong data. Please, try again");
            $('#result').css('color', 'red');
        }
    });

}

function Clear() {

    $('#name').val('');
    $('#password').val('');
    

}

function LoginOut() {

    $.ajax({
        url: "/Login/LogOut",
        type: "GET",
        success: function (result) {
         
            $("#parking").css("display", "none");          
            $("#bookings").css("display", "none");
            $("#pricing").css("display", "none");
            $("#headerdivAdmin").css("display", "none");
            $("#headerdivClient").css("display", "none");
            $("#headerdivAssistant").css("display", "none");           
            $("#parkingadmin").css("display", "none");
            $("#parkingadmin").css("display", "none");
            $("#parkingadmin").css("display", "none");
            $("#clientsAssistant").css("display", "none"); 
            $("#vehiclesAssistant").css("display", "none");
            $("#bookingsAssistant").css("display", "none");
            $("#rol").css("display", "none");
            $("#login").css("display", "block");
            Clear();
            $('#result').text("");

        },
        error: function (errorMessage) {
            alert('no');
        }
    });

   
}

function GetParkings() {
    $.ajax({
        url: '/Parking/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.city + '</td>';
                html += '<td>' + item.availableSpace + '</td>';                

                html += '<td><button data-toggle="modal" data-target="#modalParkings" onclick="return GetSpots(\'' + item.name + '\');" id="details">Details</button></td>';
                html += '</tr>';
            });

            $('#parking-tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function GetSpots(name) {
    $.ajax({
        url: '/Spot/GetByParking',
        type: "GET",
        data: { parkingname: name },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            const spots = [];
                 
            $.each(result, function (key, item) {
                spots.push(item);
            });

            var html = '<tr>'; 
            var id = 1;

            for (var i = 0; i < spots.length; i++) {
                while (id <= 3) {
                    if (i < spots.length) {  

                        let text1 = "selectedSpot";
                        let text2 = spots[i].id;
                        let result1 = text1.concat(text2);
                        reservation.parkingId = spots[i].parking.id;
                        reservation.spotRate = spots[i].rate.hourRate;

                        switch (spots[i].available) {
                            case "Yes":
                                switch (spots[i].preferential) {
                                    case "Yes":                                       
                                        html += '<td><button id="' + result1 + '"  style="background-color:blue;" onclick="return SaveSpot(\'' + spots[i].id + '\');"> </button></td>';
                                        break;
                                    case "No":
                                        html += '<td><button id="' + result1 + '" style="background-color:green;" onclick="return SaveSpot(\'' + spots[i].id + '\');"> </button></td>';
                                        break;
                                }
                                break;
                            case "No":
                                html += '<td><button style=background-color:red;> </button></td>';
                                break;
                        }
                    }
                    if (id < 3) { 
                        i++;
                    }
                    id++;
                }
                html += '</tr>';
                html += '<tr>'; 
                id = 1;
            }

            $('#spots-tbody').html(html);
               
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

var selected = null;

function SaveSpot(spot) {

    let text1 = "selectedSpot";
    let text2 = spot;
    let result2 = text1.concat(text2); 

    document.getElementById(result2).style.backgroundColor = "white";

    if (selected != null) {
        text1 = "selectedSpot";
        text2 = selected;
        result2 = text1.concat(text2);

        $.ajax({
            url: "/Spot/GetById",
            type: "GET",
            data: { id: selected },
            success: function (result) {
                if (result.preferential=="Yes") {
                    document.getElementById(result2).style.backgroundColor = "blue";
                }
                else {
                    document.getElementById(result2).style.backgroundColor = "green";
                }
            },
            error: function (errorMessage) {

            }
        });

        
    }

    selected = spot;
    reservation.spotId = spot;
    

}

function GetVehicles(userId) {

    $.ajax({
        url: '/Vehicle/GetByClient',
        type: "GET",
        data: { idClient: userId },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';

            $.each(result, function (key, item) {
                html += '<option value="' + item.id + '">' + item.name + '</option>';               
            });
            $('#vehicles').append(html);
            $('#vehiclesUpdateBooking').append(html);
            
            document.getElementById("vehicles").style.display = "block";
            document.getElementById("vehiclesUpdateBooking").style.display = "block";

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })
}

function GetUserId() {

    $.ajax({
        url: "/Login/GetUser",
        type: "GET",
        data: { name: user.name },
        success: function (result) {
            GetVehicles(result);
            reservation.userId = result;

        },
        error: function (errorMessage) {
            alert('no');
        }
    });
}

function GetTotalRate() {

    reservation.vehicleId = $('#vehicles').val();
    reservation.checkinTime = $('#checkintime').val();
    reservation.checkoutTime = $('#checkouttime').val();
    reservation.date = $('#date').val();

    var hour1 = (reservation.checkinTime).split(":"),
        hour2 = (reservation.checkoutTime).split(":")

    reservation.totalRate = (parseInt(hour2[0]) - parseInt(hour1[0])) * parseInt(reservation.spotRate);

    $('#result').text("Total Rate: " + reservation.totalRate);
    $('#result').css('color', 'white');
    
}

function SaveBooking() {

    reservation.vehicleId = $('#vehicles').val();
    reservation.checkinTime = $('#checkintime').val();
    reservation.checkoutTime = $('#checkouttime').val();
    reservation.date = $('#date').val();

    var hour1 = (reservation.checkinTime).split(":"),
        hour2 = (reservation.checkoutTime).split(":")

    reservation.totalRate = (parseInt(hour2[0]) - parseInt(hour1[0])) * parseInt(reservation.spotRate);

    $.ajax({
        url: "/Reservation/Post",
        data: JSON.stringify(reservation), 
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result = 1) {
                $('#result').text("Saved successfully")
                $('#checkintime').val('')
                $('#checkouttime').val('')
                $('#date').val('')
                $('#result').css('color', 'green')
                $('#vehicles').val($("#vehicles option:first").val());               
                UpdateSpot(reservation.spotId);
                GetParkings();
                GetBookings();
                GetUserId();
                selected = null;

            }
            else {
                $('#result').text("Error");
                $('#result').css('color', 'red');  
            }
        },
        error: function (errorMessage) {
                    
        }
    });


    
}

function UpdateSpot(spotId) {

    $.ajax({
        url: "/Spot/Put", 
        type: "POST",
        data: { id: spotId, available: "No" },
        success: function (result) {
            if (result = 1) {
                
            }
            else {
               
            }
        },
        error: function (errorMessage) {

        }
    });

}

function GetBookings() {
    $.ajax({
        url: '/Reservation/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {              
                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.parking.name + '</td>';
                html += '<td>' + item.spot.number + '</td>';
                html += '<td>' + item.date + '</td>';
                html += '<td>' + item.checkinTime + '</td>';
                html += '<td>' + item.checkoutTime + '</td>';
                html += '<td><button data-toggle="modal" data-target="#modalUpdateBookings" class="submit-btn" onclick="return GetByIdBooking(\'' + item.id + '\')" id="edit">Edit</button></td>';
                html += '<td><button data-toggle="modal" data-target="#modalDeleteBooking" class="submit-btn" onclick="showWarningBooking(\'' + item.id + '\')" id="edit">Delete</button></td>';
                html += '</tr>';
            });

            $('#bookings-tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function GetBookingsApprove() {
    $.ajax({
        url: '/Reservation/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.parking.name + '</td>';
                html += '<td>' + item.user.id + '</td>';
                html += '<td>' + item.spot.id + '</td>';
                html += '<td>' + item.date + '</td>';
                html += '<td>' + item.checkinTime + '</td>';
                html += '<td>' + item.checkoutTime + '</td>';
                html += '<td>' + item.vehicle.id + '</td>';

                html += '<td><button class="submit-btn" onclick="ApproveBooking(\'' + item.user.email + '\');">Approve</button></td>';
                html += '<td><button class="submit-btn" onclick="RejectBooking(\'' + item.user.email + '\');">Reject</button></td>';
                html += '</tr>';
            });

            $('#bookingsassistant-tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function ApproveBooking(userEmail) {
    $.ajax({
        url: '/SendEmail/Send',
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: { emailUser: userEmail },
        success: function (result) {

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })
}

function GetClients() {
    $.ajax({
        url: '/Login/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {
                if (item.rolId == 3) { 
                    html += '<tr>';
                    html += '<td>' + item.id + '</td>';
                    html += '<td>' + item.name + '</td>';
                    html += '<td>' + item.email + '</td>';               
                    html += '<td><button data-toggle="modal" data-target="#modalUpdateClientAsistant" class="submit-btn" onclick="return GetByIdClient(\'' + item.id + '\')" id="edit">Edit</button></td>';
                    html += '<td><button data-toggle="modal" data-target="#modalDeleteClientAssistant" class="submit-btn" onclick="showWarningClients(\'' + item.id + '\')" id="edit">Delete</button></td>';
                    html += '</tr>';
                }
            });

            $('#clientsassistant-tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function GetVehiclesCrud() {
    $.ajax({
        url: '/Vehicle/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {
                    html += '<tr>';
                    html += '<td>' + item.id + '</td>';
                    html += '<td>' + item.name + '</td>';
                    html += '<td>' + item.color + '</td>';
                    html += '<td>' + item.type + '</td>';
                    html += '<td><button data-toggle="modal" data-target="#modalUpdateVehicleAsistant" class="submit-btn" onclick="return GetByIdVehicle(\'' + item.id + '\')" id="edit">Edit</button></td>';
                    html += '<td><button data-toggle="modal" data-target="#modalDeleteVehicleAssistant" class="submit-btn" onclick="showWarningVehicles(\'' + item.id + '\')" id="edit">Delete</button></td>';
                    html += '</tr>';       
            });

            $('#vehiclesassistant-tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function GetParkingsAdmin() {
    $.ajax({
        url: '/Parking/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.city + '</td>';
                html += '<td>' + item.availableSpace + '</td>';

                html += '<td><button data-toggle="modal" data-target="#modalUpdate" class="submit-btn" onclick="return GetById(\'' + item.id + '\')" id="edit">Edit</button></td>';
                html += '<td><button data-toggle="modal" data-target="#modalDelete" class="submit-btn" onclick="showWarning(\'' + item.id + '\')" id="edit">Delete</button></td>';
                html += '</tr>';

            });

            $("#parkingadmin-tbody").html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })
}

function GetById(id_parking) {

    var id = 0;
    GetUserId();

    $.ajax({
        url: "/Parking/GetById",
        type: "GET",
        data: { id: id_parking },
        success: function (result) {
            $('#idUpdate').val(result.id);
            $('#nameUpdate').val(result.name);
            $('#cityUpdate').val(result.city);
            $("#availableSpaceUpdate").val(result.availableSpace);
        },
        error: function (errorMessage) {
            $('#resultUpdate').text("User not added");
            $('#resultUpdate').css('color', 'red');
        }
    });

}

var forUpdateBooking = 0;

function GetByIdBooking(bookingId) {

    var id = 0;

    $.ajax({
        url: "/Reservation/GetById",
        type: "GET",
        data: { id: bookingId },
        success: function (result) {
            $('#idUpdateBooking').val(result.id);
            $('#vehiclesUpdateBooking').val(result.vehicleId);
            $('#dateUpdateBooking').val(result.date);
            $("#checkintimeUpdateBooking").val(result.checkinTime);
            $("#checkouttimeUpdateBooking").val(result.checkoutTime);
            forUpdateBooking = result.totalRate;
        },
        error: function (errorMessage) {
            $('#resultUpdate').text("User not added");
            $('#resultUpdate').css('color', 'red');
        }
    });

}

function GetByIdClient(clietId) {

    var id = 0;

    $.ajax({
        url: "/Login/GetById",
        type: "GET",
        data: { id: clietId },
        success: function (result) {
            $('#idUpdateClient').val(result.id);
            $('#nameUpdateClient').val(result.name);    
            $('#emailUpdateClient').val(result.email);   
        },
        error: function (errorMessage) {
            $('#resultUpdate').text("User not added");
            $('#resultUpdate').css('color', 'red');
        }
    });

}

function GetByIdVehicle(vehicleId) {

    var id = 0;

    $.ajax({
        url: "/Vehicle/GetById",
        type: "GET",
        data: { id: vehicleId },
        success: function (result) {
            $('#idUpdateVehicle').val(result.id);
            $('#nameUpdateVehicle').val(result.name);
            $('#colorUpdateVehicle').val(result.color);
            $('#typeUpdateVehicle').val(result.type);
        },
        error: function (errorMessage) {
            $('#resultUpdate').text("User not added");
            $('#resultUpdate').css('color', 'red');
        }
    });

}

function GetRoles() {
    $.ajax({
        url: '/Rol/Get',
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.idRol + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '</tr>';
            });

            $('#userroles-tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function GetByIdRol(id_rol) {

    var id = 0;
    GetUserId();

    $.ajax({
        url: "/Rol/GetById",
        type: "GET",
        data: { id: id_rol },
        success: function (result) {
            $('#idUpdateRol').val(result.id);
            $('#nameUpdateRol').val(result.name);
        },
        error: function (errorMessage) {
            $('#resultUpdate').text("User not added");
            $('#resultUpdate').css('color', 'red');
        }
    });

}

function showWarning(parkingId) {
    var html = '';
    html += '<button class="submit-btn" onclick="Delete(\'' + parkingId + '\'); return false" id="form - cancel - update">Delete</button>';
    html += '<button type="button" class="submit-btn" data-dismiss="modal">Close</button>';
    $('#modalA').html(html);
}

function showWarningBooking(bookingId) {
    var html = '';
    html += '<button class="submit-btn" onclick="DeleteBooking(\'' + bookingId + '\'); return false" id="form - cancel - update">Delete</button>';
    html += '<button type="button" class="submit-btn" data-dismiss="modal">Close</button>';
    $('#modalD').html(html);
}

function showWarningClients(clientId) {
    var html = '';
    html += '<button class="submit-btn" onclick="DeleteClient(\'' + clientId + '\'); return false" id="form - cancel - update">Delete</button>';
    html += '<button type="button" class="submit-btn" data-dismiss="modal">Close</button>';
    $('#modalDC').html(html);
}

function showWarningVehicles(vehicleId) {
    var html = '';
    html += '<button class="submit-btn" onclick="DeleteVehicle(\'' + vehicleId + '\'); return false" id="form - cancel - update">Delete</button>';
    html += '<button type="button" class="submit-btn" data-dismiss="modal">Close</button>';
    $('#modalDCI').html(html);
}

function showWarningRoles(rolId) {
    var html = '';
    html += '<button class="submit-btn" onclick="DeleteRol(\'' + rolId + '\'); return false" id="form - cancel - update">Delete</button>';
    html += '<button type="button" class="submit-btn" data-dismiss="modal">Close</button>';
    $('#modalB').html(html);
}

function Delete(parkingId) {
    if (parkingId > 0) {
        $.ajax({
            url: "/Parking/Delete",
            type: "DELETE",
            data: { Id: parkingId },
            success: function (result) {
                GetParkingsAdmin();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection")
                    $('result').text("Error en la conexión");
            }
        })

    }
}

function DeleteBooking(bookingId) {
    if (bookingId > 0) {
        $.ajax({
            url: "/Reservation/Delete",
            type: "DELETE",
            data: { Id: bookingId },
            success: function (result) {
                GetBookings();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection")
                    $('result').text("Error en la conexión");
            }
        })

    }
}

function DeleteClient(clientId) {
    if (clientId > 0) {
        $.ajax({
            url: "/Login/Delete",
            type: "DELETE",
            data: { Id: clientId },
            success: function (result) {
                GetClients();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection")
                    $('result').text("Error en la conexión");
            }
        })

    }
}

function DeleteVehicle(vehicleId) {
    if (vehicleId > 0) {
        $.ajax({
            url: "/Vehicle/Delete",
            type: "DELETE",
            data: { Id: vehicleId },
            success: function (result) {
                GetVehiclesCrud();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection")
                    $('result').text("Error en la conexión");
            }
        })

    }
}


function DeleteRol(rolId) {
    if (rolId > 0) {
        $.ajax({
            url: "/Rol/Delete",
            type: "DELETE",
            data: { Id: rolId },
            success: function (result) {
                GetRoles();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection")
                    $('result').text("Error en la conexión");
            }
        })

    }
}