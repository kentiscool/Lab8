/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router'

describe('history', () => {
    test('settings', () => {
        const oldLength = history.length
        const hist = pushToHistory('settings')
        expect({
            length: hist.length,
            state: hist.state
        }).toEqual({
            length: oldLength + 1,
            state: {
                page: "settings"
            }
        });
    });

    test('entry', () => {
        const oldLength = history.length
        const hist = pushToHistory('entry', 1)
        expect({
            length: hist.length,
            state: hist.state
        }).toEqual({
            length: oldLength + 1,
            state: {
                page: "entry1"
            }
        });
    });

    test('default', () => {
        const oldLength = history.length
        const hist = pushToHistory()
        expect({
            length: hist.length,
            state: hist.state
        }).toEqual({
            length: oldLength + 1,
            state: {}
        });
    });
});
