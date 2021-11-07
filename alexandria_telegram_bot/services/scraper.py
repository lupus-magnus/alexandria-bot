import requests
from bs4 import BeautifulSoup

base_url = "https://br1lib.org"


def search_book(searched_string: str) -> object:
    """Receives a string to be searched and returns a json with title, author and image."""
    endpoint = f"{base_url}/s/{searched_string}"

    source = requests.get(endpoint).content
    soup = BeautifulSoup(source, "lxml")
    html_results = soup.find_all("tr", class_="bookRow")[0:3]

    results = []
    for snippet in html_results:
        title = snippet.find("h3", {"itemprop": "name"}).text
        url = snippet.find("h3", {"itemprop": "name"}).find("a")["href"]
        author = snippet.find("div", class_="authors").text
        image = str(snippet.find("img")["data-srcset"]).split(" ")[2]
        results.append(
            {
                "title": title,
                "author": author,
                "url": f"{base_url}/{url}",
                "image": image,
            }
        )
    print(results)
    return results


def get_book_download_source(book_download_url: str) -> str:
    """Receives the url to get the download and proceeds to download the pdf file."""

    source = requests.get(book_download_url).content
    soup = BeautifulSoup(source, "lxml")
    download_button = soup.find("a", class_="addDownloadedBook")["href"]
    print(download_button)

    download_source = f"{base_url}{download_button}"
    return download_source


def get_book(download__source: str) -> None:
    source = requests.get(download__source).content
    soup = BeautifulSoup(source, "lxml")
    # found_elems = soup.find_all(attrs={"id": "converterCurrentStatusesBoxContainer"})
    my_file = open("download_source_response.txt", "w+")
    # print(found_elems)

    my_file.write(str(soup))


if __name__ == "__main__":

    get_book("https://br1lib.org/dl/634988/3032de")
