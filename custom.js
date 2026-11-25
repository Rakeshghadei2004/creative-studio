  gsap.registerPlugin(ScrollTrigger);

        $("section").each(function () {

            let id = $(this).attr("id");

            console.log($(this))

            ScrollTrigger.create({

                trigger: this,

                start: "top 30%",

                end: "bottom 30%",

                markers:true,

                onEnter: function () {

                    $(".nav-link").removeClass("active");

                    $('a[href="#' + id + '"]').addClass("active");

                },

                onEnterBack: function () {

                    $(".nav-link").removeClass("active");

                    $('a[href="#' + id + '"]').addClass("active");

                }

            });

        });

      $(document).ready(function () {

    $("#contactForm").submit(function (e) {

        e.preventDefault();

        let valid = true;

        // Remove previous errors
        $(".form-control").removeClass("is-invalid");
        $(".invalid-feedback").text("");

        // Get values
        let name = $("#fName").val().trim();
        let email = $("#fEmail").val().trim();
        let project = $("#fProject").val().trim();
        let message = $("#fMessage").val().trim();

        // Name
        if (name === "") {
            $("#fName").addClass("is-invalid");
            $("#fNameError").text("Please enter your name.");
            valid = false;
        }

        // Email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#fEmail").addClass("is-invalid");
            $("#fEmailError").text("Please enter your email.");
            valid = false;
        }
        else if (!emailPattern.test(email)) {
            $("#fEmail").addClass("is-invalid");
            $("#fEmailError").text("Please enter a valid email.");
            valid = false;
        }

        // Project
        if (project === "") {
            $("#fProject").addClass("is-invalid");
            $("#fProjectError").text("Please enter project type.");
            valid = false;
        }

        // Message
        if (message === "") {
            $("#fMessage").addClass("is-invalid");
            $("#fMessageError").text("Please enter your message.");
            valid = false;
        }

        // Success
        if (valid) {

            $("#contactForm")[0].reset();

            $("#formMessage")
                .removeClass("d-none alert-danger")
                .addClass("alert alert-success")
                .html("✅ Your message has been sent successfully!");

            setTimeout(function () {
                $("#formMessage").addClass("d-none");
            }, 4000);

        } else {

            $("#formMessage")
                .removeClass("d-none alert-success")
                .addClass("alert alert-danger")
                .html("❌ Please correct the highlighted fields.");

        }

    });

    // Remove error while typing
    $(".form-control").on("keyup change", function () {

        $(this).removeClass("is-invalid");
        $(this).siblings(".invalid-feedback").text("");

    });

});