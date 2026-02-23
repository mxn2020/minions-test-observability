/**
 * Minions Test-observability SDK
 *
 * Trace capture, tool call logs, reasoning timings, and latency breakdowns
 *
 * @module @minions-test-observability/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Test-observability.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
