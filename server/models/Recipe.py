class Recipe():
    def __init__(self, name, description, ingredients):
        self.name = name
        self.description = description
        self.ingredients = ingredients

    def __repr__(self):
        return f"This is a recipe for {self.name}!"
    
    def add_recipe():
        return "Add recipe"
    
    def get_all_recipes():
        return "All recipes"
    
    def get_recipe_by_id(id):
        return f"Recipe {id}"
    
    def destroy(id):
        return f"Deleting recipe {id}"
