
document.getElementById("contact-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        event.preventDefault();
    }
});

document.getElementById("add-project").addEventListener("click", function() {
    var table = document.querySelector("table tbody");
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>New Project</td>
        <td>Description of the new project</td>
        <td>2024-04-01</td>
    `;

    table.appendChild(newRow);
});

window.onscroll = function() {
    var scrollButton = document.getElementById("scroll-to-top");

 
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});




//JQUERY

$(document).ready(function() {

    $("#contact-form").submit(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            event.preventDefault();
        }
    });

  
    $("main").fadeIn(1000);

   
    $("nav ul li").hover(
        function() {
            $(this).stop().slideDown(200);
        }, 
        function() {
            $(this).stop().slideUp(200);
        }
    );
    $("#toggle-resources").click(function() {
        $("#resources-list").slideToggle(300);
    });
});
