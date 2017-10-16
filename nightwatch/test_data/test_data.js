module.exports = {
    transactions: {
        minimumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresden.M.W.607.200.Brown.Arson.05022016......'
            }
        },
        noData: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: ' ',
                mke: '',
                oai: '',
                nam: '',
                sex: '',
                rac: '',
                hgt: '',
                wgt: '',
                hai: '',
                off: '',
                dow: '',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                  hrd: 'The "Header" field should be between 9 and 19 characters long',
                  mke: 'The field named "MKE" must be included',
                  oai: '"Originating Agency Identifier" must be included',
                  nam: '"Name" must be included',
                  sex: '"Sex" must be included',
                  rac: '"Race" must be included',
                  hgt: '"Height" must be included',
                  wgt: '"Weight" must be included',
                  hai: '"Hair" must be included',
                  off: '"Offense" must be included',
                  dow: '"Date of Warrant/Violation" must be included',
                },
                  queryTitle: 'No results generated due to error.',
                assembledQuery: ''


            }
        },
        olnOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        boundryTest: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '1234567891011111111',
                mke: 'MKES',
                oai: 'CHI1234SI',
                nam: 'Harry blck Copperfield Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '999',
                wgt: '999',
                hai: 'darkBrown',
                off: 'superduperArson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '1234567891011111111.MKES.CHI1234SI.Harry blck Copperfield Dresden.M.W.999.999.darkBrown.superduperArson.05022016......'
            }
        },
        lowTest: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MK',
                oai: 'CHI1234SI',
                nam: 'Jim',
                sex: 'M',
                rac: 'W',
                hgt: '010',
                wgt: '010',
                hai: 'red',
                off: 'arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MK.CHI1234SI.Jim.M.W.010.010.red.arson.05022016......'
            }
        }
    }
}
