"""
Minions Test-observability SDK — Type Schemas
Custom MinionType schemas for Minions Test-observability.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_trace_type = MinionType(
    id="test-observability-test-trace",
    name="Test trace",
    slug="test-trace",
    description="A full execution trace from a test run.",
    icon="🔍",
    schema=[
        FieldDefinition(name="runId", type="string", label="runId"),
        FieldDefinition(name="steps", type="string", label="steps"),
        FieldDefinition(name="totalDurationMs", type="number", label="totalDurationMs"),
        FieldDefinition(name="tokenCount", type="number", label="tokenCount"),
        FieldDefinition(name="toolCallCount", type="number", label="toolCallCount"),
        FieldDefinition(name="capturedAt", type="string", label="capturedAt"),
    ],
)

latency_breakdown_type = MinionType(
    id="test-observability-latency-breakdown",
    name="Latency breakdown",
    slug="latency-breakdown",
    description="Timing breakdown by phase within a test run.",
    icon="⏱️",
    schema=[
        FieldDefinition(name="traceId", type="string", label="traceId"),
        FieldDefinition(name="phase", type="string", label="phase"),
        FieldDefinition(name="durationMs", type="number", label="durationMs"),
        FieldDefinition(name="percentage", type="number", label="percentage"),
    ],
)

custom_types: list[MinionType] = [
    test_trace_type,
    latency_breakdown_type,
]

