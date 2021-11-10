from typing import List
import requests
from bs4 import BeautifulSoup
import urllib.request


base_url = "https://libgen.is"


def search_books(searched_string: str) -> List[object]:
    """Receives a query from the user, scrapes data and returns a list of books..."""
    endpoint = (
        f"{base_url}/search.php?req={searched_string.replace(' ', '+')}&view=detailed"
    )
    source = requests.get(endpoint).content
    soup = BeautifulSoup(source, "lxml")
    html_results = soup.find_all(name="tbody")[:10]
    html_results = [snippet for snippet in html_results if len(str(snippet)) > 50]
    results = []
    for (index, snippet) in enumerate(html_results):

        id = str(index + 1)
        title = snippet.find("td", {"colspan": "2"}).text
        url = snippet.find("td", {"colspan": "2"}).find("a")["href"]
        details_url = f'http://library.lol/main/{url.split("md5=")[-1]}'
        author = snippet.find("td", {"colspan": "3"}).text
        image = snippet.find("img")["src"]
        size_and_ext_info = snippet.find_all("tr", {"valign": "top"})[-4]
        size = str(size_and_ext_info.find_all("td")[1].text).split("(")[0]
        extension = size_and_ext_info.find_all("td")[-1].text
        results.append(
            {
                "id": id,
                "title": title,
                "author": author,
                "image": f"{base_url}{image}",
                "size": size.strip(),
                "extension": extension,
                "details_url": details_url,
            }
        )
    # Filtering results for only the pdf extension files.
    results = [result for result in results if result["extension"] == "pdf"][:3]
    for index, result in enumerate(results):
        result["id"] = str(index + 1)

    print(results)
    return results


def get_book_download_source(book_download_url: str) -> str:
    """Receives the url to the details page and scrapes the link to the pdf file."""
    source = requests.get(book_download_url).content
    soup = BeautifulSoup(source, "lxml")
    pdf_file_link = soup.find_all("a")[2]["href"]
    return pdf_file_link


def get_book(download_source: str, book_title: str) -> str:
    """Receives the pdf file link and downloads it into the temp folder."""

    print("Starting the get book func")
    try:
        book_pdf_file = urllib.request.urlopen(download_source)
        path_to_book = f"alexandria_telegram_bot/assets/temp/{book_title.strip()}.pdf"
        with open(path_to_book, "wb") as output:
            output.write(book_pdf_file.read())
        print("Get book function was a success.")
        return path_to_book
    except:
        raise Exception


if __name__ == "__main__":
    # search_book("Eragon")
    search_books("Eragon")  # Função nova
    # get_book_download_source("http://library.lol/main/410D6144E8E009357D3394AF44585A0C")
    # get_book(
    #     get_book_download_source(
    #         "http://library.lol/main/410D6144E8E009357D3394AF44585A0C"
    #     ),
    #     "Novo teste!",
    # )
    # get_book(
    #     "https://ipfs.io/ipfs/bafykbzacedgzwm4qwdxqkq5oy6fxgwebffgxcncjaqkhxhhuawvbrmcdxe2u2?filename=Robert%20C.%20Martin%20-%20Clean%20Code_%20A%20Handbook%20of%20Agile%20Software%20Craftsmanship-Prentice%20Hall%20%282008%29.pdf",
    #     "Clean Code",
    # )
