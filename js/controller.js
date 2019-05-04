angular.module("FolioMainModule")
    .controller("FolioController", function ($scope) {

        $scope.areas = ['home', 'resume', 'servicesx', 'portfoliox', 'blogx', 'contact'];

        $scope.about = "Programmer / Developer of Web and Mobile Systems.\n" +
            "He has more than 7 years of experience in the computer cience.\n" +
            "He is currently part of the FullStack and DevOps developer team at O ​​Kuadro.\n" +
            "Worked as Backend developer JAVA, RUBY and Mobile Android at Avski Software Solutions.\n" +
            "He has also worked in large and medium-sized companies, serving his users and equipment as Help-Desk.\n" +
            "As Freelancer, he was Network Administrator and Web Developer of small projects (JAVA, PHP and Android).";

        $scope.me = {
            firstName: "Felipe",
            middleName: "Rodrigues",
            lastName: "Michetti",
            email: "frmichetti@gmail.com",
            phone: "+55-12-98173-2648, +55-12-98176-0072 ",
            age: calculateAge(new Date("March 12, 1989")),
            country: 'BRA',
            address: "São José dos Campos, Brazil",
            resumeLink: "http://www.codecode.com.br/portfolio/index.php?section=curriculum&file=pdf",
            imageLink: "https://avatars0.githubusercontent.com/u/15258582?v=4"
        };

        $scope.status = "Available";

        $scope.skills = ["Backend-developer", "Frontend-developer", "Fullstack-developer"];

        $scope.videos = [{url: ""}, {url: ""}, {url: ""}];

        $scope.experiences = [{title: "Web Developer", period: "February 2018 - March 2019", small: "O Kuadro", description: "Developer Team with Ruby, NodeJs Language. DevOps Team. FrontEnd Team AngularJs and ReactJs."},
            {title: "Backend and Mobile Developer", period: "March 2017 - January 2018",  small: "Avski Software Solutions", description:
                "I worked as a Backend developer using the Ruby and Java Languages.Also acting as an Android developer.\n" +
                "Maintenance of systems, integrations and implementation of new functionalities."}];

        $scope.courses = [{title: "Business Administration (Bachelor)", period: "January/2012 - December/2014", small: "Anhanguera Educacional Unidade de Indaiatuba.", description:
            "Locked in the 3rd Year (5th Semester) in January 2015. Classroom course lasting 4 years."},
            {title: "Informatics with Emphasis in Information Systems (Vocational Technician)", period: "January/2007 - July/2008. (Completed)", small: "Centro de Educação Profissional de Indaiatuba – FIEC/CEPIN. ", description:
                "One year and 6 month course + 400 hours of required internship"}

        ];

        $scope.year = new Date().getFullYear();

        $scope.site = 'www.codecode.com.br';


        function calculateAge(birthday) { // birthday is a date
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    });
