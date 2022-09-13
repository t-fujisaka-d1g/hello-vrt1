describe('ドル円', () => {
  it('ドル円', () => {
    cy.visit('https://www.google.com/')

    // 検索フォームに「ドル円」を入力して、検索開始
    cy.get('input[name="q"]').type('ドル円{enter}')

    // スクリーンショット撮影時に邪魔になるので、ヘッダを非表示
    cy.get('#searchform')
      .children()
      .each(($el) => {
        $el.hide()
      })

    // スクリーンショットを保存
    cy.get('div[data-attrid="Converter"]').screenshot('ドル円', { overwrite: true, padding: 8 })
  })
})
