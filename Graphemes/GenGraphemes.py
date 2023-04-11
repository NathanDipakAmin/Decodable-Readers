import requests

class GenGraphemes():
    def __init__(self, level):
        self.level = int(level)
    
    def run(self):
        sight_words_list = self.load_sight_words()

        grapheme_list = self.load_graphemes()

        # print("Requested Level : ", self.level)
        # print("Length of Grapheme List : ", len(grapheme_list))

        if (int(self.level) > int(len(grapheme_list))):
            self.level = len(grapheme_list)

        target_grapheme = self.get_target_grapheme(grapheme_list, self.level)
        grapheme_words = self.get_grapheme_words(target_grapheme)
        grapheme_words = self.sort_grapheme_words_by_length(grapheme_words)

        return grapheme_words


    # Saves sightwords to a list
    def load_sight_words(self):
        f = open('Graphemes/sightwords.txt', 'r')
        sight_words = f.read()
        sight_words_list = sight_words.split()
        f.close()
        return sight_words_list


    # Save the graphemes to a list
    def load_graphemes(self):
        f = open('Graphemes/graphemes.txt', 'r')
        graphemes = f.read()
        graphemes_list = graphemes.split()
        f.close()
        return graphemes_list


    def get_target_grapheme(self, grapheme_list, level):
        student_level = int(level)
        target_grapheme = grapheme_list[student_level]
        return target_grapheme


    # Need to cull the list of generated words to remove words with
    def get_grapheme_words(self,target_grapheme):
        url = "http://api.datamuse.com/words?sp=*" + target_grapheme + "*"
        response = requests.get(url)
        words = response.json()
        return [word["word"] for word in words]

    def sort_grapheme_words_by_length(self, grapheme_words):
        return sorted(grapheme_words, key=len)
