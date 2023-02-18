import json
from pydantic import BaseModel

# JSON encoder to serialize Pydantic models
class PydanticJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, BaseModel):
            return obj.dict()
        return super().default(obj)

# JSON serializer that uses the PydanticJSONEncoder
def to_json(obj):
    return json.dumps(obj, cls=PydanticJSONEncoder, indent=4)