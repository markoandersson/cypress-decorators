import GooglePage from '../../src/google-page'

describe('Google related tests', () => {

    const google = new GooglePage()

    it('Should find my site from Google', () => {

        google.goTo()
        google.search('Marko Andersson')
        google.nextPage()

        google.shouldContainSearchResult('Marko Andersson\'s professional site')
    })
})
