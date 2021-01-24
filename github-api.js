// Query to fetch the repos from the Github account

exports.githubApiQuery = `
    query($github_login : String!) {
        user(login: $github_login) {
            name
            repositories (first: 10) {
                nodes {
                    id
                    name
                    description
                    url
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }`