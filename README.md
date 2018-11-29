<!-- personal API -->

{
    documentation_url: "https://github.com/dogtownoak/personal-api",
    base_url: "https://intense-river-23951.herokuapp.com/",
    -endpoints: [
        - {
            method: "GET",
            path: "/api",
            description: "Describe all available endpoints"
        },
        - {
            method: "GET",
            path: "/api/profile",
            description: "Who am I and where am I from"
        },
        - {
            method: "GET",
            path: "/api/art",
            description: "Describe all available art"
        },
        - {
            method: "POST",
            path: "/api/art",
            description: "Create a piece of art"
        },
        - {
            method: "PUT",
            path: "/api/art/:id",
            description: "Edit a pice of art"
        },
        - {
            method: "DELETE",
            path: "/api/art/:id",
            description: "Delete a piece of art"
        }
    ]
}