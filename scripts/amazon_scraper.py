import csv
import sys
import json
from bs4 import BeautifulSoup

# Firefox & Chrome
from selenium import webdriver

my_list = []


# Generates an Amazon URL and injects the search query
def get_url(search_term):
    """Generates a proper search URL from the search term"""
    template = 'https://www.amazon.com/s?k={}&ref=nb_sb_noss_1'
    search_term = search_term.replace(' ', '+')
    return template.format(search_term)


# Converts the list of arguments into a spaced string
def parse_query(args):
    arg_list = ''
    arg_string = ' '
    if len(args) > 1:
        arg_list = args[1:]
        arg_string = arg_string.join(arg_list)
    return arg_string

# ------------------------------------------------Begin Script--------------------------------------------


# Will only run the script if arguments are provided
if len(sys.argv) > 1:

    # Initialize web driver and  URL
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--ignore-ssl-errors')
    driver = webdriver.Chrome(
        executable_path=r"C:\Users\brenw\Dev\chromedriver_win32\chromedriver.exe", options=options)

    query = parse_query(sys.argv)
    url = get_url(query)
    driver.get(url)

    # Start Scraping
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    results = soup.find_all('div', {'data-component-type': 's-search-result'})

    for result in results:
        try:
            title = result.find('span', {'class': 'a-text-normal'}).text
            rating = result.findAll('span', {'class': 'a-icon-alt'})[0].text
            price = result.findAll(
                'span', {'class': 'a-offscreen'})[0].text.replace('$', '')
            image = result.findAll("img")[0].attrs['src']
            link_suffix = result.findAll(
                'a',  {'class': 'a-text-normal'})[0]['href']
            link = 'https://www.amazon.com/{}'.format(link_suffix)
            # relevance = calculate_relevance(sys.argv, title)

            if title and price and rating and link:
                entry = {'title': title, 'price': price,
                         'rating': rating, 'link': link, 'image': image}
                my_list.append(entry)

        except IndexError as e:
            pass

    my_json = json.dumps(my_list)
    print(my_json)

    # Cleans up all browsers opened by the web driver
    driver.quit()


else:
    print('Error: You need to specify at least 1 search argument.')
