/**
 * @fileoverview disable console
 * @author disable-console
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/disable-console'),
    RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('disable-console', rule, {
    valid: [
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: 'console.log()',
            errors: [{ message: 'Fill me in.', type: 'Me too' }],
        },
    ],
})
