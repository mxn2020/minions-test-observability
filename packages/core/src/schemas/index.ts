/**
 * @module @minions-test-observability/sdk/schemas
 * Custom MinionType schemas for Minions Test-observability.
 */

import type { MinionType } from 'minions-sdk';

export const testtraceType: MinionType = {
  id: 'test-observability-test-trace',
  name: 'Test trace',
  slug: 'test-trace',
  description: 'A full execution trace from a test run.',
  icon: '🔍',
  schema: [
    { name: 'runId', type: 'string', label: 'runId' },
    { name: 'steps', type: 'string', label: 'steps' },
    { name: 'totalDurationMs', type: 'number', label: 'totalDurationMs' },
    { name: 'tokenCount', type: 'number', label: 'tokenCount' },
    { name: 'toolCallCount', type: 'number', label: 'toolCallCount' },
    { name: 'capturedAt', type: 'string', label: 'capturedAt' },
  ],
};

export const latencybreakdownType: MinionType = {
  id: 'test-observability-latency-breakdown',
  name: 'Latency breakdown',
  slug: 'latency-breakdown',
  description: 'Timing breakdown by phase within a test run.',
  icon: '⏱️',
  schema: [
    { name: 'traceId', type: 'string', label: 'traceId' },
    { name: 'phase', type: 'string', label: 'phase' },
    { name: 'durationMs', type: 'number', label: 'durationMs' },
    { name: 'percentage', type: 'number', label: 'percentage' },
  ],
};

export const customTypes: MinionType[] = [
  testtraceType,
  latencybreakdownType,
];

